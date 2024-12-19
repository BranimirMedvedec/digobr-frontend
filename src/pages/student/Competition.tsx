import LevelButton from "@/components/level-button.tsx";
import {useEffect, useState} from "react";
import Frog from "@/components/frog.tsx";
import EmoFrogFlower from "@/components/emo-frog-flower.tsx";
import CelebrateScore from "@/components/celebrate-score.tsx";
import TeamColor from "@/components/team-color.tsx";

export default function Competition() {

    const [activeLevel, setActiveLevel] = useState<number>(4);
    const [invisibleLevels, setInvisibleLevels] = useState<number[]>([]);
    const [animateFrogs, setAnimateFrogs] = useState<boolean>(false);
    const [animateScore, setAnimateScore] = useState<boolean>(false);
    const levels = [1, 2, 3, 4];

    function defineLevelStatus(level: number) {
        if (level === activeLevel) return "ACTIVE";
        else if (level === activeLevel - 1) return "PREVIOUS";
        else return "INACTIVE"
    }

    setTimeout(() => setActiveLevel(5), 2000)

    useEffect(() => {
        if (activeLevel === 5) {
            let timeoutId: NodeJS.Timeout;

            levels.forEach((level) => {
                timeoutId = setTimeout(() => {
                    setInvisibleLevels((prev) => [...prev, level]);
                }, (level + 1) * 500);
            });

            setTimeout(() => {
                setAnimateFrogs(true);
            }, (activeLevel + 1) * 500);

            setTimeout(() => {
                setAnimateScore(true);
            }, (activeLevel + 1) * 500 + 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [activeLevel]);

    return (
        <div className="relative h-screen sm:w-1/2 lg:w-1/3 mx-auto overflow-hidden">
            {animateScore && (
                <>
                    <TeamColor colorHEX='#FFFB00'/>
                    <CelebrateScore score={5265}/>
                </>
            )}
            <EmoFrogFlower animateFrogs={animateFrogs}/>
            <div className="flex flex-col items-center justify-around w-full px-8 h-2/3">
                {levels.reverse().map((level) => {
                    const isInvisible = invisibleLevels.includes(level);

                    return level % 2 !== 0 ?
                        <div key={level} id={level.toString()}
                             className={`flex ${level === 1 && 'flex-row-reverse'} items-center justify-around w-full transition-opacity duration-500 ${
                                 isInvisible ? "opacity-0" : "opacity-100"
                             }`}>
                            <LevelButton level={level} status={defineLevelStatus(level)}/>
                            <img
                                src="/flower.png"
                                alt="Title Flower"
                                className={`w-20 transform ${
                                    level === 1 ? "-translate-y-1/2" : "-translate-y-1/4"
                                }`}
                            />
                        </div>
                        :
                        <div
                            key={level}
                            id={level.toString()}
                            className={`transition-opacity duration-500 ${
                                isInvisible ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            <LevelButton level={level} status={defineLevelStatus(level)}/>
                        </div>;
                })}
            </div>
            <div className="relative flex items-center h-1/6 pr-10">
                {!animateFrogs && (
                    <img
                        src="/leaf.png"
                        alt="Title Frog"
                        className="absolute bottom-2 right-4 h-24"
                    />
                )}
                {activeLevel === 1 && <Frog positionCSS="bottom-10 right-6"/>}
            </div>
        </div>
    )
}
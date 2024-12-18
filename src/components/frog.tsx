type FrogProps = {
    positionCSS: string
}

export default function Frog({ positionCSS } : FrogProps) {

    function makeFrogJump() {
        const frog = document.querySelector('#frog');
        /* jump up */
        frog?.classList.add('-translate-y-20');
        /* go down after jumping up transition duration */
        setTimeout(() => {
            frog?.classList.remove('-translate-y-20');
        }, 500);
    }

    return (
        <img
            id="frog"
            src="/frog_2.png"
            alt="Title Frog"
            className={`absolute ${positionCSS} h-20 transform transition-transform duration-500`}
            onClick={() => makeFrogJump()}
        />
    )
}
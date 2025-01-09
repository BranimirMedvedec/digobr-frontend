import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button"
import { startCompetition } from "@/lib/functions"

type StartCompetitionButtonProps = {
	username: string
	id: number
}

export default function StartCompetitionButton({
	username,
	id,
}: StartCompetitionButtonProps) {
	async function handleStartCompetition() {
		try {
			if (!username) {
				alert("Morate biti prijavljeni da biste pokrenuli natjecanje")
				return
			}

			if (id == 0) {
				alert("Nemoguće pokrenuti natjecanje bez validnog ID-a")
				return
			}

			await startCompetition(username, id)
		} catch (error) {
			console.log("Error starting competition: ", error)
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button
					className="h-12 border-4 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg"
					onClick={handleStartCompetition}>
					Pokreni
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Jeste li sigurni da želite pokrenuti natjecanje?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Učenici neće moći uću u grupe nakon što natjecanje
						počne!
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Odustani</AlertDialogCancel>
					<AlertDialogAction>Nastavi</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

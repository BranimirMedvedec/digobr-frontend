import { FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { getUsername } from "@/lib/auth-functions"
import { createCompetition } from "@/lib/functions"
import { CreateCompetition } from "@/models/create-competition"
import { Group } from "@/models/group"
import { useToast } from "@/hooks/use-toast"

type CreateCompetitionFormProps = {
	onCompetitionCreated: (id: number, name: string, data: Group[]) => void
}

export default function CreateCompetitionForm({
	onCompetitionCreated,
}: CreateCompetitionFormProps) {
	const [name, setName] = useState<string>("")
	const [studentsNo, setStudentsNo] = useState<number>(0)
	const [nameMessage, setNameMessage] = useState("")
	const [studentsNoMessage, setStudentsNoMessage] = useState("")
	const { toast } = useToast()

	async function handleCreateCompetition(e: FormEvent) {
		e.preventDefault()
		try {
			if (name.length === 0 || studentsNo <= 2) {
				if (name.length === 0)
					setNameMessage("Morate unijeti naziv natjecanja")

				if (studentsNo <= 2)
					setStudentsNoMessage("Broj djece mora biti veći od 2")

				return
			}
			setNameMessage("")
			setStudentsNoMessage("")

			const username = getUsername()
			if (!username) {
				toast({
					title: "Morate biti prijavljeni da biste kreirali natjecanje",
					variant: "destructive",
					className: "bg-black text-white border-1 rounded-xl",
					duration: 2500,
				})
				return
			}

			const competition: CreateCompetition = {
				competitionName: name,
				numberOfStudents: studentsNo,
			}

			const { id, groups } = await createCompetition(
				username,
				competition
			).finally(() => {
				setStudentsNo(0)
				setName("")
			})

			onCompetitionCreated(id, name, groups)
			console.log("Created competition with groups: ", groups)
		} catch (error) {
			console.log("Error creating competition: ", error)
		}
	}

	return (
		<form onSubmit={handleCreateCompetition}>
			<h2 className="font-alumni text-white text-3xl font-semibold">
				Naziv natjecanja
			</h2>
			<Input
				className="w-full bg-white border-0 rounded-xl h-12 text-center text-3xl font-alumni font-semibold shadow-lg"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{nameMessage && (
				<span className="text-red-500 text-sm font-bold">
					{nameMessage}
				</span>
			)}

			<h2 className="font-alumni text-white text-3xl font-semibold">
				Broj djece
			</h2>
			<div className="flex items-center justify-center space-x-2">
				<Input
					type="number"
					className="w-2/3 bg-white border-0 rounded-xl h-12 text-center text-3xl font-alumni font-semibold shadow-lg"
					value={studentsNo}
					onChange={(e) => setStudentsNo(parseInt(e.target.value))}
				/>

				<Button
					type="submit"
					className="w-1/3 h-12 border-4 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg">
					Kreiraj
				</Button>
			</div>
			{studentsNoMessage && (
				<span className="text-red-500 text-sm font-bold">
					{studentsNoMessage}
				</span>
			)}
		</form>
	)
}

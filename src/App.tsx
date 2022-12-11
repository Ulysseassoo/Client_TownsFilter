import { Box, Button, Container, Flex, Input, useToast } from "@chakra-ui/react"
import React from "react"
import { useRef, useState } from "react"
import SearchBar from "./components/SearchBar"
import TownShow from "./components/TownShow"
import { Town } from "./inteface/Town"
import { searchCommuneName } from "./services/Api"

function App() {
	const [data, setData] = React.useState<Town[]>([])
	const toast = useToast()

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>) => {
		event.preventDefault()

		const form = event.currentTarget as HTMLFormElement

		const formData = new FormData(form)

		const search = formData.get("search")?.toString()

		try {
			if (search !== undefined && search.length > 0) {
				// Lancer la recherche
				const results = await searchCommuneName(search)
				setData(results)
			}
		} catch (error) {
			toast({
				description: "Il y a eu une erreur avec votre recherche...",
				colorScheme: "red"
			})
		}
	}

	const filter = (postalCode: number) => {
		const postalString = postalCode.toString()
		return postalString.charAt(0) === "9" && (postalString.charAt(1) === "7" || postalString.charAt(2) === "8")
	}

	const metropolitanTowns = () => {
		return data.filter((town) => !filter(town.codePostal))
	}

	const overseasTowns = () => {
		return data.filter((town) => filter(town.codePostal))
	}

	return (
		<Box height="100vh" p="4">
			<Flex flexDir="column" flex="1" height="full" gap="10">
				<Box as="form" display="flex" gap="4" onSubmit={handleSubmit}>
					<SearchBar />
				</Box>

				<Flex height="full" maxHeight="calc(100vh - 125px)" flex="1" gap="10">
					<TownShow title="Villes de métropole" towns={metropolitanTowns()} />
					<TownShow title="Villes d'outre-mer" towns={overseasTowns()} />
				</Flex>
			</Flex>
		</Box>
	)
}

export default App

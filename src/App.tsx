import { Box, Button, Input } from "@chakra-ui/react"
import React from "react"
import { useRef, useState } from "react"

function App() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>) => {
		event.preventDefault()

		const form = event.currentTarget as HTMLFormElement

		const formData = new FormData(form)

		const search = formData.get("title")?.toString()

		if (search !== undefined && search.length > 0) {
			// Lancer la recherche
		}
	}

	return (
		<Box height="100vh" p="4">
			<Box as="form" display="flex" gap="4" onSubmit={handleSubmit}>
				<Input placeholder="Entrer le nom d'une ville..." name="search" id="search" variant="filled" width="full" p="2" borderRadius={"lg"} />
				<Button colorScheme={"green"} type="submit">
					Rechercher
				</Button>
			</Box>
		</Box>
	)
}

export default App

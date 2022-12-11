import { Input, Button, Box } from "@chakra-ui/react"
import React from "react"

const SearchBar = () => {
	return (
		<>
			<Input placeholder="Entrer le nom d'une ville..." name="search" id="search" variant="filled" width="full" p="2" borderRadius={"lg"} />
			<Button colorScheme={"green"} type="submit">
				Rechercher
			</Button>
		</>
	)
}

export default SearchBar

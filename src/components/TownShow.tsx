import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { Town } from "../inteface/Town"
import TownItem from "./TownItem"

interface Props {
	title: string
	towns: Town[]
}

const TownShow = ({ title, towns }: Props) => {
	const count = towns.length
	const hasFound = !!count

	const hasFoundText = hasFound ? `${count} villes correspondent au texte saisi` : "Aucune ville ne correspond au texte saisi"

	return (
		<Flex gap="4" flexDir={"column"} bg="gray.100" flex="1" height="full" borderRadius={"lg"} p="2" px="10">
			<Heading size="2xl" textAlign={"center"} pt="2">
				{title}
			</Heading>

			<Box bg={hasFound ? "green.500" : "red.500"} width="full" p="4" color="white" borderRadius={"lg"}>
				{hasFoundText}
			</Box>

			<Box flex="1" overflowY="scroll" mb="2">
				{towns.map((town) => (
					<TownItem key={town.id} name={town.nomCommune} codePostal={town.codePostal} />
				))}
			</Box>
		</Flex>
	)
}

export default TownShow

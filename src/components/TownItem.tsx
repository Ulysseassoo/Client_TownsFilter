import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"

interface Props {
	name: string
	codePostal: number
}

const TownItem = ({ name, codePostal }: Props) => {
	return (
		<Box p="4" bg="gray.400" borderRadius={"lg"} mb="2">
			<Flex width="full" justifyContent={"space-between"}>
				<Text color="white">{name}</Text>
				<Text color="gray.200">{codePostal}</Text>
			</Flex>
		</Box>
	)
}

export default TownItem

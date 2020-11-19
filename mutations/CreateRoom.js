import gql from 'graphql-tag';

export default gql `
    mutation createRooms(
        $id:ID!,
        $roomGenderFilter:Boolean!,
        $when:AWSDateTime!
    ){
        createRooms(
            input:{
                id:$id,
                roomGenderFilter:$roomGenderFilter,
                when:$when
            }
        ){
            id
            roomGenderFilter
            when
        }
    }
`
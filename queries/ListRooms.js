import gql from 'graphql-tag';
export default gql `
    query listRooms{
        items{
            id
            roomGenderFilter
            when
        }
    }
`
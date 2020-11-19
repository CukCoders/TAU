/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      phoneNumber
      userID
      email
      password
      profilePic {
        id
        url
        createdAt
        updatedAt
      }
      name
      gender
      state
      school
      accountInfo {
        id
        bank
        accountNum
        owner
        createdAt
        updatedAt
      }
      major
      studentNum
      currentRoom {
        id
        roomID
        when
        roomGenderFilter
        createdAt
        updatedAt
      }
      rooms {
        id
        roomID
        when
        roomGenderFilter
        createdAt
        updatedAt
      }
      ReportHistory {
        id
        reason
        state
        createdAt
        updatedAt
      }
      Blocking {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      Blocked {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      Score
      Reviews {
        id
        Score
        Reason
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bank
        accountNum
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      from {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      content
      createDate
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      title
      Users {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      messages {
        id
        content
        createDate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Latitude
        Longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      roomID
      Users {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      chatting {
        id
        title
        createdAt
        updatedAt
      }
      ready {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      from {
        id
        name
        Latitude
        Longitude
        createdAt
        updatedAt
      }
      to {
        id
        name
        Latitude
        Longitude
        createdAt
        updatedAt
      }
      when
      roomGenderFilter
      leader {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      pay {
        id
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomID
        when
        roomGenderFilter
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      unpaidUser {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      price
      connectedRoom {
        id
        roomID
        when
        roomGenderFilter
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      reportedUser {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      from {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      reason
      where {
        id
        roomID
        when
        roomGenderFilter
        createdAt
        updatedAt
      }
      state
      createdAt
      updatedAt
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reason
        state
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlockedUser = /* GraphQL */ `
  query GetBlockedUser($id: ID!) {
    getBlockedUser(id: $id) {
      id
      block {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      deactivateDate
      createdAt
      updatedAt
    }
  }
`;
export const listBlockedUsers = /* GraphQL */ `
  query ListBlockedUsers(
    $filter: ModelBlockedUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlockedUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deactivateDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeactivate = /* GraphQL */ `
  query GetDeactivate($id: ID!) {
    getDeactivate(id: $id) {
      id
      deactivateUser {
        id
        phoneNumber
        userID
        email
        password
        name
        gender
        state
        school
        major
        studentNum
        Score
        createdAt
        updatedAt
      }
      why
      deactivateReason
      deactivatedDate
      createdAt
      updatedAt
    }
  }
`;
export const listDeactivates = /* GraphQL */ `
  query ListDeactivates(
    $filter: ModelDeactivateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeactivates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        why
        deactivateReason
        deactivatedDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Score
        Reason
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

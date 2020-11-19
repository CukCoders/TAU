/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createBlockedUser = /* GraphQL */ `
  mutation CreateBlockedUser(
    $input: CreateBlockedUserInput!
    $condition: ModelBlockedUserConditionInput
  ) {
    createBlockedUser(input: $input, condition: $condition) {
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
export const updateBlockedUser = /* GraphQL */ `
  mutation UpdateBlockedUser(
    $input: UpdateBlockedUserInput!
    $condition: ModelBlockedUserConditionInput
  ) {
    updateBlockedUser(input: $input, condition: $condition) {
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
export const deleteBlockedUser = /* GraphQL */ `
  mutation DeleteBlockedUser(
    $input: DeleteBlockedUserInput!
    $condition: ModelBlockedUserConditionInput
  ) {
    deleteBlockedUser(input: $input, condition: $condition) {
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
export const createDeactivate = /* GraphQL */ `
  mutation CreateDeactivate(
    $input: CreateDeactivateInput!
    $condition: ModelDeactivateConditionInput
  ) {
    createDeactivate(input: $input, condition: $condition) {
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
export const updateDeactivate = /* GraphQL */ `
  mutation UpdateDeactivate(
    $input: UpdateDeactivateInput!
    $condition: ModelDeactivateConditionInput
  ) {
    updateDeactivate(input: $input, condition: $condition) {
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
export const deleteDeactivate = /* GraphQL */ `
  mutation DeleteDeactivate(
    $input: DeleteDeactivateInput!
    $condition: ModelDeactivateConditionInput
  ) {
    deleteDeactivate(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;

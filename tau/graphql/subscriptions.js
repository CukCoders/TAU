/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      id
      bank
      accountNum
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      Latitude
      Longitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment {
    onCreatePayment {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment {
    onUpdatePayment {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment {
    onDeletePayment {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
export const onCreateBlockedUser = /* GraphQL */ `
  subscription OnCreateBlockedUser {
    onCreateBlockedUser {
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
export const onUpdateBlockedUser = /* GraphQL */ `
  subscription OnUpdateBlockedUser {
    onUpdateBlockedUser {
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
export const onDeleteBlockedUser = /* GraphQL */ `
  subscription OnDeleteBlockedUser {
    onDeleteBlockedUser {
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
export const onCreateDeactivate = /* GraphQL */ `
  subscription OnCreateDeactivate {
    onCreateDeactivate {
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
export const onUpdateDeactivate = /* GraphQL */ `
  subscription OnUpdateDeactivate {
    onUpdateDeactivate {
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
export const onDeleteDeactivate = /* GraphQL */ `
  subscription OnDeleteDeactivate {
    onDeleteDeactivate {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
      id
      Score
      Reason
      createdAt
      updatedAt
    }
  }
`;

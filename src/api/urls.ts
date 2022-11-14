// person
export const GET_PERSON_DETAILS = "/persons";
export const GET_PERSONS = "/persons/view";

//auth
export const POST_FAKE_LOGIN = "/post-fake-login";
export const POST_FAKE_JWT_LOGIN = "/authentication/login";
export const POST_AUTHENTICATE = "/authentication";
export const POST_LOGOUT = "/authentication/logout";
export const POST_PASSWORD_FORGET = "/recover-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";
export const JWT_REGISTER = "/post-jwt-register";
export const REGISTER = "/register";
export const USER_CHANGE_PASSWORD = "/change-password";
export const USER_RECOVER_PASSWORD = "/:id:/recover-password";
export const EMAIL_CONFIRMATION =
  "/email-confirmation/resend-confirmation-link";
export const CONFIRM_EMAIL = "/confirm-email";
export const ACCEPT_INVITE = "/accept-project-invite"

export const PHONE_SMS = "/sms";
export const CHECK_OTP = "/check-verification-code";
export const PHONE_SEND_OTP = "/initiate-verification";
export const SEND_OTP = "/send-otp-phone";

// profile & settings
export const GET_PROFILE_DETAILS = "/profile-details";
export const GET_USER_SETTINGS = "/user-settings";
export const UPDATE_ETTINGS = "/update-user-settings";

// projects
export const GET_PROJECTS = "/projects";

// users
export const GET_USERS = "/users";
export const CHANGE_STATUS = "/change-status";

// sectors
export const GET_SECTORS = "/sectors";

// connections
export const GET_CONNECTIONS = "/connections";

// fastMessages
export const GET_FAST_MESSAGE = "/fast-message";

// fastMessages
export const GET_MESSAGES_TEMPLATES = "/messages-templates";
export const SEND_MESSAGES_TEMPLATES = "/send-template";

// activities
export const GET_ACTIVITIES = "/activities";
export const TRANSFER_SECTOR = "/transfersector";
export const TRANSFER_USER = "/transferuser";

// messages
export const GET_MESSAGES = "/messages";

// calls
export const GET_CALLS_LIST = "/calls-list";

// bookmarks
export const GET_BOOKMARKS_LIST = "/bookmarks-list";
export const DELETE_BOOKMARK = "/bookmarks-delete";
export const UPDATE_BOOKMARK = "/bookmarks-update";

// chats
export const GET_FAVOURITES = "/get-favourites";
export const GET_DIRECT_MESSAGES = "/get-direct-messages";
export const GET_CHANNELS = "/get-channles";
export const ADD_CONTACTS = "/add-contact";
export const CREATE_CHANNEL = "/create-channel";
export const GET_CHAT_USER_DETAILS = "/get-user-details";
export const GET_CHAT_USER_CONVERSATIONS = "/get-user-conversations";
export const SEND_MESSAGE = "/send-message";
export const RECEIVE_MESSAGE = "/receive-message";
export const READ_MESSAGE = "/read-message";
export const RECEIVE_MESSAGE_FROM_USER = "/receive-message-from-user";
export const DELETE_MESSAGE = "/delete-message";
export const FORWARD_MESSAGE = "/forward-message";
export const DELETE_USER_MESSAGES = "/delete-user-messages";
export const TOGGLE_FAVOURITE_CONTACT = "/toggle-favourite-contact";
export const GET_ARCHIVE_CONTACT = "/get-archive-contacts";
export const TOGGLE_ARCHIVE_CONTACT = "/toggle-archive-contact";
export const READ_CONVERSATION = "/read-conversation";
export const DELETE_IMAGE = "/user-delete-img";

// groups
export const GET_CHANNEL_DETAILS = "/get-channel-details";

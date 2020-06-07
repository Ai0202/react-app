// import { steps } from "redux-effects-steps";
// import { fetchrRead, fetchrCreate } from "redux-effects-fetchr";

// Action Types
export const GET_MEMBERS_REQUEST = "members/request"
export const GET_MEMBERS_SUCCESS = "members/success"
export const GET_MEMBERS_FAIL = "members/fail"
export const POST_MEMBER_REQUEST = "member/post/request"
export const POST_MEMBER_SUCCESS = "member/post/success"
export const POST_MEMBER_FAIL = "member/post/fail"

type MembersRequest = {
  type: typeof GET_MEMBERS_REQUEST;
}

type MembersSuccess = {
  type: typeof GET_MEMBERS_SUCCESS;
  payload: any;
}

type MembersFail = {
  type: typeof GET_MEMBERS_FAIL;
  error: boolean;
}

type PostMemberRequest = {
  type: typeof POST_MEMBER_REQUEST;
  payload: {
    resource: string;
    body: {
      name: string;
      number: number;
      description: string;
    };
  };
};

type PostMemberSuccess = {
  type: typeof POST_MEMBER_SUCCESS;
  payload: {
    data: {
      name: string;
      number: number;
      description: string;
    }
  }
}

type PostMemberFail = {
  type: typeof POST_MEMBER_FAIL;
  error: boolean;
}

type Action = 
  | MembersRequest
  | MembersSuccess
  | MembersFail
  | PostMemberRequest
  | PostMemberSuccess
  | PostMemberFail;

// Action Creators
export function getMembersRequest(): MembersRequest {
  return {
    type: GET_MEMBERS_REQUEST,
  }
}

export function getMembersSuccess(members: any): MembersSuccess {
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: {
      members
    }
  }
}

export function getMembersFail(): MembersFail {
  return {
    type: GET_MEMBERS_FAIL,
    error: true,
  }
}

export const postMemberRequest = (payload: {
  resource: string;
  body: {
    name: string;
    number: number;
    description: string;
  }
}): PostMemberRequest => {
  return {
    type: POST_MEMBER_REQUEST,
    payload
  }
}

export const postMember = (member: {
  name: string;
  description: string;
  number: number;
}) => {
  return {
    type: POST_MEMBER_REQUEST,
    member
  }
}

// Initial state
type Members = {
  name: string;
  description: string;
  number: number;
  image: string;
}

export type State = {
  members: Members[];
  loading: boolean;
  loaded: boolean;
  error?: boolean;
};

export const INITIAL_STATE = {
  members: [
    {
      name: "******",
      description: "***********************",
      number: 0,
      image: "/images/default.png",
    }
  ],
  loading: true,
  loaded: false,
}

// Reducer
export function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case GET_MEMBERS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_MEMBERS_SUCCESS: { 
      return {
        ...state,
        loading: false,
        loaded: true,
        members: action.payload.members,
      }
    }
    case GET_MEMBERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    default: {
      return state
    }
  }
}
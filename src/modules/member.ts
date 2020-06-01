// Action Types
const GET_MEMBERS_REQUEST = "members/request";
const GET_MEMBERS_SUCCESS = "members/success";
const GET_MEMBERS_FAIL = "members/fail";

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

type Action = 
  | MembersRequest
  | MembersSuccess
  | MembersFail

// Action Creators
export function getMembersRequest(): MembersRequest {
  return {
    type: GET_MEMBERS_REQUEST,
  };
}

export function getMembersSuccess(res: any): MembersSuccess {
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: res,
  };
}

export function getMembersFail(): MembersFail {
  return {
    type: GET_MEMBERS_FAIL,
    error: true,
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
  error?: boolean;
};

export const INITIAL_STATE = {
  members: [],
  loading: false,
};

// Reducer
export default function (state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case GET_MEMBERS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_MEMBERS_SUCCESS: {
      const {
        payload: { data },
      } = action;
      return {
        ...state,
        loading: false,
        members: data,
      }
    }
    case GET_MEMBERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
}
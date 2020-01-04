export const FAILED_ADMIN_PASSWORD = "FAILED_ADMIN_PASSWORD";
export const SUCCEEDED_ADMIN_PASSWORD = "SUCCEEDED_ADMIN_PASSWORD";

function receive_account_results(res) {
  if(!res.user){
    return {
      type: FAILED_ADMIN_PASSWORD,
      receivedAt: Date.now()
    }
  }
  return {
    type: SUCCEEDED_ADMIN_PASSWORD,
    user: res.user,
    receivedAt: Date.now()
  }
}

export function check_account(id, password) {
  let data = {
    login_id: id,
    login_password: password
  }
  return dispatch => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => dispatch(receive_account_results(res)))
  }
}

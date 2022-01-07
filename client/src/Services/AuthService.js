export default {
  login: (user) => {
    return fetch("/user/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>{
        if(res.status!==401)
        return res.json().then(data=>data);
        else
        return {isAuthenticated:false,user:{username:"",role:""}}
      }
      )
  },
  register: (user) => {
    return fetch("/user/regsiter", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  logout: () => {
    return fetch("/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch("/user/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else 
      return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  getData:()=>{
    return fetch('/user/products').then((res) => {
      if (res.status !== 401) return res.json().then((res) => res);
      else 
      return res;
    });
  },
  
};
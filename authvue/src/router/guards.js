import createStore from '../store/index.js'

export function logout(to, from, next){
      
    createStore.commit('clearAuth')
    next({ name: 'login' });
}

// so tem acesso a rota se estiver autenticado
export function isAuthenticated(to, from, next){

    if(createStore.state.authData.isAuthenticated == true){
        next();
    }else{
        next({ name: 'login'});
    }
}

// so tem acesso a rota se nao estiver autenticado
export function isNotAuthenticated(to, from, next){

    if(createStore.state.authData.isAuthenticated == true){
        next({ name: 'dashboard' });
    }else{
        next();
    }
}
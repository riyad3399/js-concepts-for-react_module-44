const addToLocalStorage = () => {
    const idField = document.getElementById('storage-id');
    const id = idField.value;
    const valueField = document.getElementById('storage-value');
    const value = valueField.value;
    
    // set the value in the local storage 
    if (id && value) {
        // localStorage.setItem(id, value);  /\
        
        const item = { id, value }
        localStorage.setItem(id, JSON.stringify(item));
        const storage = JSON.parse(localStorage.getItem(id));
        console.log(storage);
    }
    
    idField.value = '';
    valueField.value = '';


};





const addToSessionStorage = () => {
    const sessionId = document.getElementById('session-id');
    const id = sessionId.value;
    const sessionValue = document.getElementById('session-value');
    const value = sessionValue.value;
    
    // set the value in the section storage
    if (id && value) {
        sessionStorage.setItem(id, value);
    }
    sessionId.value = '';
    sessionValue.value = '';
}
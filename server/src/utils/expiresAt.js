const expiresAt = ()=>{
new Date();
return expiresAt.setDate(expiresAt.getDate() + 2);  
}

module.exports = expiresAt;

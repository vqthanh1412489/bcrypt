
const { hash, compare } = require('bcrypt');

hash('123456', 8)
.then(encrypted => {
    
    console.log(encrypted);
    getRounds('$2a$08$zStubdwZKAfq83Va7M0IA.6748RsRSFn6ejzdBs1HsgfwODE7Sswi');
})
.catch(err => console.log(err));

// compare('123456', '$2a$08$zStubdwZKAfq83Va7M0IA.6748RsRSFn6ejzdBs1HsgfwODE7Sswi')
// .then(same => console.log(same))
// .catch(err => console.log(err));



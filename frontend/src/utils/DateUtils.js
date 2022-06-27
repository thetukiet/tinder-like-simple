const calcAge = (dateOfBirth) => {
    var today = new Date();
    var birthDate = new Date(dateOfBirth.replace('/','-'));
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export default calcAge

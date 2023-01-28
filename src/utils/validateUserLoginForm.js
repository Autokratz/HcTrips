const validateUserLoginForm = (values) => {
    const username = values.username;
    const password = values.password;
    const errors = {};

    if (!username) {
        errors.username = "The username field is required";
    } else if (!password) {
        errors.password = "The password field is required";
    } else if (username.length <= 6 || username.length >= 15) {
        errors.username = "The username must be between 6 and 15 characters";
    } else if (password.length < 8) {
        errors.password = "The password must be at least 8 characters";
    }

    return errors;
};

export default validateUserLoginForm;
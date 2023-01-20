const statusCodes = {
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '204': 'No Content',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '500': 'Veuillez réessayer ulterieurement',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    'tooLong': 'Le nom d\'utilisateur est trop long',
    'emailNotCorrect': 'L\'adresse email n\'est pas correcte',
};
class Status {
    static getErrorMessage(code){
        return statusCodes[code] ;
    }

    static getStatus (techincalError, functionalError, variableName, variableValue, messageCode){
        return{
            'techincalError': techincalError,
            'functionalError': functionalError,
            [variableName]: variableValue,
            'message': statusCodes[messageCode]
        }
    }
}
export default Status;
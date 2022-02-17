export const logActions = (store) => (next) => actionInformation => {
    console.log('Runnign:', actionInformation);
    next(actionInformation);
}
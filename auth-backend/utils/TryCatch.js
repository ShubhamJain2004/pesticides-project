// this is a util file to reduce the repeated code writing 
// again again of try catch block

const TryCatch = (handler) => {
    return async (req, res, next) => {
        try{
            await handler(req, res, next);
        } catch(error){
            res.status(500).json({
                message:error.message,
            })
        }
    }
}

export default TryCatch;
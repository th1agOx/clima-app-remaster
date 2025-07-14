// Estrutura de logs default 
export function handleApiError(error) {
    if (error.response) {
        console.error('[API ERROR][Response]', error.response.status, error.response.data )
    } else if (error.request) {
        console.error('[API ERROR][Request]', error.request )
    } else {
        console.error('[API ERROR][General]', error.message )
    }
}
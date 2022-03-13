type fetchResult = {
    success: boolean;
    data: any;
    error?: string;
}

export const fetchHelper = async (url: string, method: string): Promise<fetchResult> => {
    try {
        const resp = await fetch(url, {method: method});
        const respJson = await resp.json();
        return {
            success: true,
            data: respJson
        }; 
    } catch (error) {

        return {
            success: false,
            error: 'An error occurred while performing request',
            data: null
        }; 

    }
}
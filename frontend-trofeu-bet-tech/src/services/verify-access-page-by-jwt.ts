import { jwtDecode } from "jwt-decode"

interface MyTokenPayload {
    id: string;
    sector: string;
}

export const verifyAccessByJwt = (token: string) => {

    if (!token || token == '') {
        return null;
    }

    const decodToken = jwtDecode<MyTokenPayload>(token);
    const allowedSectors = ['TRAFEGO', 'GERENCIAL', 'DESENVOLVIMENTO'];

    if (!allowedSectors.includes(decodToken.sector)) {
        return false;
    }

    return true;
}
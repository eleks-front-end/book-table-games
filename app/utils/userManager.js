import { createUserManager } from 'redux-oidc';
import { KEYUTIL } from 'jsrsasign';

function createUserManagerSettings () {
    let pubkey = KEYUTIL.getKey(process.env.REACT_APP_WSO2_PUBKEY);
    let jwkPubkey = KEYUTIL.getJWKFromKey(pubkey);
    // WSO2 doesn't generate kid as RFC 7636 JWK thumprint for server key https://goo.gl/CdpIdW
    // TODO: Custom jwks_uris are the only proper solution (and we need 5.3.0-M5 to discover them)
    // Currently is seems to be hardcoded to environment.jwkKid == d0ec514a32b6f88c0abd12a2840699bdd3deba9d
    jwkPubkey.kid = process.env.REACT_APP_WSO2_KID; // TODO: remove this hack
    // jwkPubkey.kid = jsrsasign.KJUR.jws.JWS.getJWKthumbprint(jwkPubkey);
    return {
        authority: process.env.REACT_APP_WSO2_AUTHORITY,
        client_id: process.env.REACT_APP_WSO2_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_WSO2_REDIRECT_URI,
        post_logout_redirect_uri: process.env.REACT_APP_WSO2_REDIRECT_URI,
        automaticSilentRenew: false,
        response_type: process.env.REACT_APP_WSO2_RESPONSE_TYPE, // defaults to id_token
        scope: process.env.REACT_APP_WSO2_SCOPE,

        // Until discovery endpoint gets in stable (implemented in 5.3.0-M5)
        // https://wso2.org/jira/browse/IDENTITY-4282
        // WSO2 5.3.0 was released, but no CORS on discovery endpoint
        metadata: {
            issuer: process.env.REACT_APP_WSO2_METADATA_ISSUER,
            authorization_endpoint: process.env.REACT_APP_WSO2_METADATA_AUTHORIZATION_ENDPOINT,
            userinfo_endpoint: process.env.REACT_APP_WSO2_METADATA_USERINFO_ENDPOINT,
            check_session_iframe: process.env.REACT_APP_WSO2_METADATA_CHECK_SESSION_IFRAME,
            end_session_endpoint: process.env.REACT_APP_WSO2_METADATA_END_SESSION_ENDPOINT,
            revocation_endpoint: process.env.REACT_APP_WSO2_METADATA_REVOCATION_ENDPOINT,
        },
        revokeAccessTokenOnSignout: true,
        // Fix CORS https://hasanthipurnima.blogspot.com/2016/05/applying-cors-filter-to-wso2-identity.html
        // before making this true
        loadUserInfo: true,
        signingKeys: [jwkPubkey]
    };
}
const userManager = createUserManager(createUserManagerSettings());
export default userManager;
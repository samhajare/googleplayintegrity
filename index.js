import { google } from "googleapis";
const playintegrity = google.playintegrity("v1");

async function googlePlayIntegrity(
  packageName,
  clientEmail,
  privateKey,
  token
) {
  if (!token) {
    new Error("Please provide a valid token");
  }
  let jwtClient = new google.auth.JWT(clientEmail, null, privateKey, [
    "https://www.googleapis.com/auth/playintegrity",
  ]);

  google.options({ auth: jwtClient });

  const res = await playintegrity.v1.decodeIntegrityToken({
    packageName: packageName,
    requestBody: {
      integrityToken: token,
    },
  });

  return res.data.tokenPayloadExternal;
}
function verifyPlayIntegrityToken(tokenPayload) {
  //will remove after dev test
  console.log(tokenPayload);
  //validate package name
  if (tokenPayload.appIntegrity.packageName != playIntegrity.packageName)
    new Error("Not a valid package name");

  //check app Recognition
  if (
    tokenPayload.appIntegrity.appRecognitionVerdict !=
    playIntegrity.appRecognitionVerdict
  )
    new Error("Failed to check appRecognitionVerdict");

  //check device integiry
  if (
    !playIntegrity.deviceRecognitionVerdict.includes(
      tokenPayload.deviceIntegrity.deviceRecognitionVerdict[0]
    )
  )
    new Error("Failed to check deviceRecognitionVerdict");

  //check appLicensingVerdict
  if (
    tokenPayload.accountDetails.appLicensingVerdict !=
    playIntegrity.appLicensingVerdict
  )
    new Error("Failed to check appLicensingVerdict");
}
module.exports = googlePlayIntegrity;

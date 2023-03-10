# Google Play integrity

Google play integrrity package helps you to decode and verify App token (https://developer.android.com/google/play/integrity/verdict)

## Important Note

If you want to implement the Play Integrity API in your app you shouldn't do it this way. The API server should not send the whole JSON to the app, only a yes/no. Also ideally you should pair the integrity request with another one (for example login). That way your API won't let the user proceed without a valid Integrity token that passes integrity checks (even if your app is reverse engineered).

## Setup

Following are the step to setup server side play integrity verdict

1. Install google play intergrity package
2. Following params required to request play integrity verdict

- `packageName` to your app package name
- `clientEmail` Client email from your service account
- `privateKey` privateKey from your service account
- `token` token from android app (generated from nonce)

## How to set up Google Cloud

1. Make a new project
2. Go to APIs & Services -> Enabled APIs & Services -> Enable APIs & Services and enable the _Play Integrity API_
3. On the Google Play Integrity API page go to Credentials -> Create Credentials -> Service Account. Set a name and leave everything to the default.
4. Go to Keys -> Add Key -> Create new key. The json that downloads automactially is the json you need for the Environment Variable.

## License

MIT License

```
Copyright (c) 2022 Nikolas Spiridakis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

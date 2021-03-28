/**PHP
 *  $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'"}'
 */

const device_id = 4;
const guid = 20;
const username = "Tom";


//const data = '{"device_id":"' + device_id + '","guid":"' + guid +'","username":"'+ username +'","}';
const data = `{"device_id":"'${device_id}'","guid":"' ${guid}'","username":"'${username}'","}`;
data;
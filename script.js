import { arr } from "./db.js";
import { userBoxs } from "./components/users.js";
import { reload } from "./libs/utils.js";


reload(arr, 'main_body', userBoxs)
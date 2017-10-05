import { dialogFactory } from './Dialog';
import { Overlay } from '../overlay';
import { Button, IconButton } from '../button';

const Dialog = dialogFactory(Overlay, Button, IconButton);

export default Dialog;
export { Dialog };

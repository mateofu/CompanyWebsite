import { Router } from 'express';
import formController from '../../controllers/v1/formController.js';
import emailController from '../../controllers/v1/emailController.js';



const router = Router();

router.route('/captcha').post(formController.verifyCaptcha);
router.route('/contact').post(emailController.sendContactFormEmail);

export default router;

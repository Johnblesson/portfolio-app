// Home page
export const index = (req, res) => {
  res.render("index");
};

import contactForm from '../models/model.js';

// Create a new contact form
export const createContactForm = async (req, res) => {
    try {
        const newContactForm = await contactForm.create(req.body);
        res.status(201).render('index')
        // res.status(201).json({
        //     status: 'success',
        //     data: {
        //         contactForm: newContactForm
        //     }
        // })

    // Set a session variable to indicate successful form submission
    // req.session.formSubmitted = true;

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Get all contact forms
export const getAllContactForms = async (req, res) => {
    try {
        const contactForms = await contactForm.find();
        res.status(200).json({
            status: 'success',
            results: contactForms.length,
            data: {
                contactForms
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// export default { createContactForm, getAllContactForms };
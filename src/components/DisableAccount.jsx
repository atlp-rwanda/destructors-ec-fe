import React from 'react';
import axios from 'axios';

const DisableAccount = async (id, email) => {
  try {
    const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
      personalizations: [
        {
          to: [{ email }],
          dynamic_template_data: {
            reason: 'YOUR_DISABLE_REASON',
          },
        },
      ],
      from: { email: 'calvinusbukaran@gmail.com' },
      template_id: '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',
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default DisableAccount;


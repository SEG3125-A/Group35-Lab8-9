export const questions = [
  {
    section: 1,
    items: [
      {
          label: 'First Name',
          type: 'text',
          value: 'First Name'
      },
      {
          label: 'Last Name',
          type: 'text',
          value: 'Last Name'
      }
      ,
      {
          label: 'Email address',
          type: 'email',
          value: 'mail'
      },
      {
          label: 'Number',
          type: 'tel',
          value: 'Number'
      },
      {
          label: 'Adress',
          type: 'text',
          value: 'ages'
        },
        {
          label: 'Province',
          type: 'information',
      },
        {
          label: '-',
          type: 'select',
          value: 'state',
          options: [ 'NL', 'PE', 'NS', 'NB', 'QC','ON','MB','SK','AB','BC','YT','NT','NU']
        },
        {
          label: 'Postal Code',
          type: 'code',
          value: 'ages'
        }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Payment Method',
        type: 'credit',
     },
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'If you are ready to submit please press `Submit`',
        type: 'information'
      }
    ]
  }
]
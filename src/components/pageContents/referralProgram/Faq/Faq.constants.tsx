import {
  chakra,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const FaqContents = [
  {
    question: 'Who can apply?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            This program is designed for individuals, not necessarily for
            businesses. If you&apos;re a business that could benefit from a
            mutual relationship, such as a designer or copywriter, please{' '}
            <Link href="/contact" color="brand.600" fontWeight="semibold">
              contact us
            </Link>{' '}
            directly to propose an agreement.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'What information do you need from me?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            To create your account, we will need your name and email address. To
            prevent spam, your email address will need to be verified.
            Additional information will be collected based on your payout
            method.
          </Text>
          <Text>
            <chakra.span fontWeight="semibold">Payment by check:</chakra.span>{' '}
            The address where you want your check mailed.
          </Text>
          <Text>
            <chakra.span fontWeight="semibold">
              Payment by bank account:
            </chakra.span>{' '}
            Your debit card information and zip code or your banking details,
            including account number and routing number.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'Would I be an employee of Keplux Development?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            No. You&apos;re considered a non-employee that&apos;s providing
            services to Keplux Development.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'How much does this program cost?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            Nothing. Your role is in referring paying clients to us. There is no
            purchase or investment necessary, other than perhaps time, on your
            part to participate in the referral program.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'Who can I refer?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            We&apos;re looking for individuals and businesses who would benefit
            from our services, such as those who:
          </Text>
          <UnorderedList pl={8}>
            <ListItem>Don&apos;t have a website but want one</ListItem>
            <ListItem>Have an outdated website and want to update it</ListItem>
            <ListItem>
              Need to add additional features to an existing website
            </ListItem>
            <ListItem>
              Have other business issues that could be solved with a better web
              experience
            </ListItem>
          </UnorderedList>
        </Stack>
      </>
    ),
  },
  {
    question: 'Are there any rules?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            While we appreciate the time you take to submit referrals, we do ask
            that you abide by the following:
          </Text>
          <UnorderedList pl={8}>
            <ListItem>
              Don&apos;t present yourself as an employee of Keplux Development.
              This includes in emails, phone calls and text messages, social
              media posts, and any other avenue through which you seek
              referrals.
            </ListItem>
            <ListItem>
              Don&apos;t spam referrals to hope one sticks. We aren&apos;t
              interested in simple lists of businesses who have outdated
              websites or no websites at all. The individuals and businesses
              you&apos;re referring should, to the best of your knowledge, be
              actively pursuing web design and development services.
            </ListItem>
          </UnorderedList>
          <Text>
            The complete set of terms and conditions will be presented during
            sign up. Violation of the terms and conditions may result in the
            suspension or termination of your account.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'How will I be paid?',
    panel: (
      <>
        <Text fontSize="sm">
          To make things convenient for you, we offer a variety of payout
          options. You can choose to receive a paper check, a direct debit
          payment to your bank account, or a payment through PayPal.
        </Text>
      </>
    ),
  },
  {
    question: 'Do I have to pay taxes on my referral payouts?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            Everyone&apos;s tax situation is different, so we suggest that you
            consider your other sources of taxable income and/or consult with an
            accountant or other tax professional.
          </Text>
          <Text>
            In complying with IRS regulations, if you receive $600 or more in
            referral payments in a given tax year, we are required to issue you
            Form 1099-MISC, which will provide you with the total amount
            we&apos;ve paid you in addition to other important information (such
            as our EIN).
          </Text>
          <Text>
            Should you wish to receive a 1099-MISC when your payouts are less
            than $600, contact us or send a request through your account
            dashboard and we&apos;ll be happy to provide you with one.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'How can I check the status of my referrals and payouts?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            This information can be accessed in your dashboard. When you submit
            a referral, it will generate a lead directly in our CRM (customer
            relationship management) software. If we close on a lead, we will
            close it in our CRM and your dashboard will be updating
            automatically, so you&apos;ll always have the same information we
            have!
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'How much can I make?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            If you keep referring, we&apos;ll keep paying! There&apos;s no upper
            limit on how much you can make.
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'How much will I be paid per referral?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            This depends on the scope of your referral&apos;s project. However,
            you can expect to be paid in accordance to the{' '}
            <Link
              href="#referral-payout-chart"
              color="brand.600"
              fontWeight="semibold"
            >
              Referral Payout Chart
            </Link>
            .
          </Text>
        </Stack>
      </>
    ),
  },
  {
    question: 'When do I get paid?',
    panel: (
      <>
        <Stack fontSize="sm">
          <Text>
            When your referral pays for their services, we will send your
            payment within three business days. Receipt of your payment is
            dependent on the processing times of your bank.
          </Text>
        </Stack>
      </>
    ),
  },
];

export default FaqContents;

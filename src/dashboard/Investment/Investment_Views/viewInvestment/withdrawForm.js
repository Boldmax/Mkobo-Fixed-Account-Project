import React from 'react';
import { WithdrawCard, Close, Content, Header, AlertCard, AlertContent, Content2, SubmitButton, Cancel, CheckBox } from "./investStyleItems.style";

export default function WithdrawForm({ hide, close }) {
    return (
        <div>
            <WithdrawCard hide={hide}>
                <Close onClick={close}>x</Close>
                <Header>Withdraw Investment</Header>
                <Content> Your investment has reached maturity. It’stime to cash out.</Content>
                <AlertCard><AlertContent>Your funds will be sent to your Access Bank Account (0011223344). Tap to change</AlertContent></AlertCard>
                <Content2><CheckBox type='checkbox' />I accept the Mkobo investment<a style={{ margin: '0.1rem auto auto 0.5rem', textDecoration: 'none' }} href="#">Terms and Conditions </a></Content2>
                <SubmitButton>Liquidate </SubmitButton>
                <Cancel onClick={close}>Cancel</Cancel>
            </WithdrawCard>
        </div>
    )
}

import React from 'react';
import { LiquidateCard, Close, Content, Header, AlertCard, AlertContent, Content2, SubmitButton, Cancel, CheckBox } from "./investStyleItems.style";

export default function LiquidateForm({ close, change }) {
    return (
        <div>
            <LiquidateCard change={change}>
                <Close onClick={close}>x</Close>
                <Header>Liquidate Investment</Header>
                <Content> Your investment has not reached maturity.
                Are you sure you want lo liquidate your investment?
                      You will forfeit 100% of your interest on withdrawal.</Content>
                <AlertCard><AlertContent>Your funds will be sent to your Access Bank Account (0011223344). Tap to change</AlertContent></AlertCard>
                <Content2><CheckBox type='checkbox' />I accept the Mkobo investment<a style={{ margin: '0.1rem auto auto 0.5rem', textDecoration: 'none' }} href="#">Terms and Conditions </a></Content2>
                <SubmitButton red>Withdraw </SubmitButton>
                <Cancel onClick={close}>Cancel</Cancel>
            </LiquidateCard>
        </div>
    )
}

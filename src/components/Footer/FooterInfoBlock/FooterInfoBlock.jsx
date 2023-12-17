import React from 'react'
import { FooterInfoBlockWrapper,
          FooterInfoBlockTitle,
          FooterInfoBlockList,
          FooterInfoBlockListItem,
          FooterInfoBlockListLink
 } from './FooterInfoBlock.styled'

const FooterInfoBlock = () => {
  return (
    <FooterInfoBlockWrapper>
          <FooterInfoBlockTitle>Інформація</FooterInfoBlockTitle>
          <FooterInfoBlockList>
            <FooterInfoBlockListItem>
              <FooterInfoBlockListLink to='/about'>Про нас</FooterInfoBlockListLink>
            </FooterInfoBlockListItem>
            <FooterInfoBlockListItem>
              <FooterInfoBlockListLink to='/ourteam'>Наша команда</FooterInfoBlockListLink>
            </FooterInfoBlockListItem>
            <FooterInfoBlockListItem>
              <FooterInfoBlockListLink to='/joboffers'>Вакансії</FooterInfoBlockListLink>
            </FooterInfoBlockListItem>
            <FooterInfoBlockListItem>
              <FooterInfoBlockListLink to='/reviews'>Відгуки</FooterInfoBlockListLink>
            </FooterInfoBlockListItem>
          </FooterInfoBlockList>
        </FooterInfoBlockWrapper>
        
  )
}

export default FooterInfoBlock
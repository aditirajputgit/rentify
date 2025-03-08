import React from 'react'

function Footer() {
    return (
        <footer style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px 24px 0', width: '100%', alignItems: 'center', borderTop: '1px solid #e5e7eb', backgroundColor: '#fff',boxSizing:"border-box" }}>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>© 2023 Rentify. All rights reserved.</p>
            <nav style={{ marginLeft: 'auto', display: 'flex', gap: '16px' }}>
                <a style={{ fontSize: '12px', color: '#6b7280', textDecoration: 'underline', cursor: 'pointer' }} href="#">
                    Terms of Service
                </a>
                <a style={{ fontSize: '12px', color: '#6b7280', textDecoration: 'underline', cursor: 'pointer' }} href="#">
                    Privacy
                </a>
            </nav>
        </footer>
    )
}

export default Footer
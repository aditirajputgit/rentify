import { useState } from 'react'
import { Card, CardContent, CardHeader, Typography, Button } from "@mui/material"
import { Bike, Truck } from "lucide-react"
import RickshawDetails from './RickshawDetails'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  const [showRickshawDetails, setShowRickshawDetails] = useState(false)

  return (
    <main style={{ flex: 1, padding: '48px 24px 96px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <Typography variant="h2" style={{ color: '#1f2937' }}>
            Rent Bikes and Rickshaws
          </Typography>
          <Typography variant="body1" style={{ maxWidth: '700px', margin: '0 auto', color: '#6b7280' }}>
            Explore our range of bikes and rickshaws for your next adventure.
          </Typography>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '32px', smGridTemplateColumns: '1fr 1fr' }}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
            <CardHeader
              title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Bike style={{ height: '48px', width: '48px', color: '#0070f3', marginRight: '8px' }} />
                  <Typography variant="h5" style={{ color: '#1f2937' }}>Bike Rental</Typography>
                </div>
              }
            />
            <CardContent>
              <Typography variant="body1" style={{ color: '#6b7280' }}>
                Enjoy the freedom of the open road with our comfortable bikes.
              </Typography>
              <Link to="/bike">
              <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>Rent Bike</Button></Link>
            </CardContent>
          </Card>
          <Card style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
            <CardHeader
              title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Truck style={{ height: '48px', width: '48px', color: '#0070f3', marginRight: '8px' }} />
                  <Typography variant="h5" style={{ color: '#1f2937' }}>Rickshaw Rental</Typography>
                </div>
              }
            />
            <CardContent>
              <Typography variant="body1" style={{ color: '#6b7280' }}>
                Experience the city like never before with our stylish rickshaws.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '16px' }} onClick={() => setShowRickshawDetails(!showRickshawDetails)}>
                {showRickshawDetails ? 'Hide Details' : 'View Details'}
              </Button>
            </CardContent>
          </Card>
        </div>
        {showRickshawDetails && <RickshawDetails />}
      </div>
    </main>
  )
}
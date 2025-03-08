import { useState } from 'react'
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material"
import { Star } from "lucide-react"

export default function RickshawDetails() {
  const [attendant, setAttendant] = useState('with')

  return (
    <section style={{ padding: '48px 24px', backgroundColor: '#f3f4f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px', color: '#1f2937' }}>Rickshaw Details</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', smGridTemplateColumns: '1fr 1fr', lgGridTemplateColumns: '1fr 1fr 1fr' }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Star style={{ height: '24px', width: '24px', color: '#0070f3' }} />
              <h3 style={{ marginLeft: '8px', fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Classic Rickshaw</h3>
            </div>
            <p style={{ color: '#6b7280', marginBottom: '16px' }}>
              A traditional rickshaw with a classic design.
            </p>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Price</h4>
              <p style={{ color: '#6b7280' }}>
                $10 per hour
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Attendant Options</h4>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ marginBottom: '8px', color: '#1f2937' }}>Attendant Options</FormLabel>
                <RadioGroup row value={attendant} onChange={(e) => setAttendant(e.target.value)}>
                  <FormControlLabel value="with" control={<Radio />} label="With Attendant" />
                  <FormControlLabel value="without" control={<Radio />} label="Without Attendant" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
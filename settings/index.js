function Colors(props) {
  return (
    <Page>
    
     
      <Toggle
          settingsKey="toggle"
          label="12h"
        />    
        <Toggle
          settingsKey="white"
          label="White icons"
        /> 
         <Toggle
          settingsKey="distanceUnit"
          label="Distance mi"
        /> 
       <Toggle
          settingsKey="temperatureUnit"
          label="Temperature °F"
        /> 
    
 
    
      <Section
        title={<Text bold align="center">Left Background Color</Text>}>
  
        <ColorSelect
          settingsKey="leftBackgroundColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},   
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
  
    
    
    
          <Section
        title={<Text bold align="center">Right Background Color</Text>}>
        <ColorSelect
          settingsKey="rightBackgroundColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
        
          ]}
        />
    </Section>
    
    
              <Section
        title={<Text bold align="center">Hour Color</Text>}>
        <ColorSelect
          settingsKey="hourColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'}, 
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Minute Color</Text>}>
        <ColorSelect
          settingsKey="minuteColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">HR Color</Text>}>
        <ColorSelect
          settingsKey="hrColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Steps Color</Text>}>
        <ColorSelect
          settingsKey="stepsColor"
          colors={[
            {color: '#8080FF'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
                      <Section
        title={<Text bold align="center">Distance Color</Text>}>
        <ColorSelect
          settingsKey="distanceColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}    
          ]}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Date Color</Text>}>
        <ColorSelect
          settingsKey="dateColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Day Color</Text>}>
        <ColorSelect
          settingsKey="dayColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Battery Color</Text>}>
        <ColorSelect
          settingsKey="batteryColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
    <Section
        title={<Text bold align="center">Weather Color</Text>}>
        <ColorSelect
          settingsKey="weatherColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    
    
        <Section
        title={<Text bold align="center">Activity Minutes Color</Text>}>
        <ColorSelect
          settingsKey="activeColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'},
            {color: '#A9A9A9'},
            {color: '#696969'},
            {color: '#DCDCDC'}
          ]}
        />
    </Section>
    

    </Page>
  );
}

registerSettingsPage(Colors);
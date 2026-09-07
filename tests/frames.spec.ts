// Frames

/*

Helping us in integrating one html page to another html page.
By using tag <iframe>


<html> - page.goto("")
....
        page.locator()
....
    <iframe> - frame - const framePage = page.frameLocator()
        <html>
        ..... frame.locator()
        .....
        <iframe> - Nested frame - const nestedFrame  = framePage.frameLocator()
            
            <html> 
            ..... nestedFrame.locator()
            .....
            </html> 

        </iframe>

        </html>
    </iframe>
    
</html>



*/
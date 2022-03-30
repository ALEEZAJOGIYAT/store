import React from 'react'

export const trial=()=>{
    return(
        <Container
        maxWidth="sm"
        sx={{
          mb: 4,
          // backgroundColor: "rgb(17, 54, 63)"
        }}
      >
        <Paper
          sx={{
            fontSize: 4,
            boxShadow: 4,
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            margin: "auto",
            maxWidth: 500,
          }}
          elevation={3}
        >
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
            Create Store
          </Typography>
          <Divider />
          <br />
          <br />

          <form
          // onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  required
                  id="outlined-required"
                  label="Name of Store"
                  name="storeName"
                  value={storeDetails.storeName}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    width: "45%",
                    marginLeft: 5,
                  }}
                  id="outlined-select-currency"
                  select
                  label="Type of Store"
                  value={storeDetails.storeType}
                  name="storeType"
                  onChange={handleChange}
                  helperText="Please select anyone"
                >
                  {type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <br />
              <Divider />
              <br />
              <br />
              <Typography
                variant="h5"
                component="h2"
                textAlign="center"
                sx={{ fontWeight: "bolder" }}
                //variant="h6"
                gutterBottom
              >
                Product Details
              </Typography>
              <Divider />
              <br />
              <br />
              <div>
                <br />
                <br />

                <TextField
                  sx={{ width: "90%" }}
                  required
                  id="outlined-required"
                  label="Product Name"
                  name="productName"
                  value={storeDetails.productName}
                  onChange={handleChange}
                />

                <br />
                <br />
                <br />
                <br />
                <br />

                <TextField
                  sx={{ width: "90%" }}
                  required
                  id="outlined-required"
                  label="Details"
                  name="productDetails"
                  value={storeDetails.productDetails}
                  onChange={handleChange}
                />
                <br />
                <br />
                <br />
                <br />
                <br />

                <TextField
                  sx={{ width: "90%" }}
                  required
                  id="outlined-required"
                  type="number"
                  label="Price"
                  name="productPrice"
                  value={storeDetails.productPrice}
                  onChange={handleChange}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div>
                  <input
                    accept="image/*"
                    type="file"
                    id="select-image"
                    style={{ display: "none" }}
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                  <label htmlFor="select-image">
                    <Button
                      variant="contained"
                      component="span"
                      sx={{
                        //marginLeft: 25,
                        backgroundColor: "rgb(22, 128, 128)",
                        width: "300%",
                        fontWeight: 800,
                      }}
                    >
                      Upload Image
                    </Button>
                  </label>
                  {imageUrl && selectedImage && (
                    <Box mt={2} textAlign="center">
                      <div>Image Preview:</div>
                      <img
                        src={imageUrl}
                        alt={selectedImage.name}
                        height="100px"
                      />
                    </Box>
                  )}
                </div>
                <br />
                <br />

                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    marginTop: 3,
                    marginLeft: 30,
                    width:'45%',
                    backgroundColor: "rgb(28, 28, 29)",
                  }}
                  onClick={addProduct}
                >
                  Add Products
                </Button>
              </div>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </div>

    )
}
        {/* <Input
          label="Job Title"
          type={title}
          placeholder="Job Title Here"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Job Description</label>
        <textarea class="form-control" rows="4" id="Input"  value={description}
          onChange={(e) => setDescription(e.target.value)}/>
        <Input
          label="Minimum GPA Required"
          type="number"
          required={true}
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
        <Input
          label="Minimum Salary Required"
          type="number"
          required={true}
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <Input
          label="Last Date to Apply"
          type="date"
          required={true}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}

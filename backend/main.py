from fastapi import FastAPI, UploadFile, File, HTTPException
import fitz

app = FastAPI(
    title="Multi-Agent Financial Research System",
    description="AI-powered financial research platform",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Financial Research System API is running!"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
    
    
    
    
    
@app.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    # Check file extension
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed"
        )

    # Read uploaded file
    contents = await file.read()

    # Check empty file
    if not contents:
        raise HTTPException(
            status_code=400,
            detail="Uploaded file is empty"
        )

    try:
        # Open PDF from memory
        pdf = fitz.open(
            stream=contents,
            filetype="pdf"
        )

        # Extract text from all pages
        extracted_text = ""

        for page in pdf:
            extracted_text += page.get_text()

        pdf.close()

        return {
            "filename": file.filename,
            "message": "PDF uploaded successfully",
            "total_characters": len(extracted_text),
            "extracted_text": extracted_text
        }

    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Unable to read PDF file"
        )
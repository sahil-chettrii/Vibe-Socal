ALTER TABLE users ADD COLUMN email_verified_at TIMESTAMPTZ;

CREATE TABLE email_otps (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      CITEXT NOT NULL,
  code_hash  TEXT NOT NULL,
  purpose    VARCHAR(30) NOT NULL DEFAULT 'verify_email',
  attempts   INT NOT NULL DEFAULT 0,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at    TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_email_otps_email ON email_otps (email, created_at DESC);
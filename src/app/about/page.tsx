import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social, home } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  const ogImage = home.image || person.avatar || "/images/og/home.jpg";

  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: ogImage,
    path: about.path,
  });
}

export default function About() {
  // helper to create id-friendly slugs from titles
  const slug = (s: string | undefined | null) => {
    if (!s) return "";
    return s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");
  };
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.academic.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    
    {
      title: about.activities?.title || "Activities",
      display: about.activities ? about.activities.display : false,
      items: about.activities ? about.activities.items.map((a) => a.organization) : [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
  image={home.image || person.avatar || `/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            <Tag size="l" variant="success">
              Open to Work
            </Tag>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={slug(about.intro.title)}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="CV" onBackground="brand-weak" />
                <Row paddingX="8">My CV</Row>
                <IconButton
                  href={person.cv}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-l">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={slug(about.work.title)} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={slug(experience.company)} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: React.ReactNode, aIndex: number) => (
                        <Text as="li" variant="body-default-m" key={`${experience.company}-${aIndex}`}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, imgIndex) => (
                          <Row key={imgIndex} border="neutral-medium" radius="m" minWidth={image.width} height={image.height}>
                            <Media enlarge radius="m" sizes={image.width.toString()} alt={image.alt} src={image.src} />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={slug(about.studies.title)} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="s" marginBottom="24">
                <Text className={styles.sectionSubtitle} variant="heading-strong-xl">
                  Academic studies
                </Text>
                {about.studies.academic.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="1">
                    <Text id={slug(institution.name)} variant="heading-strong-m">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.degree ? institution.degree + (institution.timeframe ? ` · ${institution.timeframe}` : '') : institution.description}
                    </Text>
                    {institution.description && (
                      <Text variant="body-default-s" onBackground="brand-weak">
                        {institution.description}
                      </Text>
                    )}
                  </Column>
                ))}
              </Column>
              {about.studies.extra?.courses && about.studies.extra.courses.length > 0 && (
                <Column className={styles.sectionGroup} fillWidth gap="s" marginBottom="40">
                  <Text className={styles.sectionSubtitle} variant="heading-strong-xl">
                    Courses & certificates
                  </Text>
                  {about.studies.extra.courses.map((course, index) => (
                    <Column key={`${String(course.title)}-${index}`} fillWidth gap="4">
                      <Text id={slug(String(course.title))} variant="heading-strong-m">
                        {course.title}
                      </Text>
                      <Row gap="8" vertical="center">
                        {course.provider && (
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {course.provider}
                          </Text>
                        )}
                        {course.year && (
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {course.year}
                          </Text>
                        )}
                        {course.credentialUrl && (
                          <Button
                            size="s"
                            variant="secondary"
                            href={course.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            prefixIcon="openLink"
                          >
                            View credential
                          </Button>
                        )}
                      </Row>
                      {course.notes && (
                        <Text variant="body-default-s" onBackground="brand-weak">
                          {course.notes}
                        </Text>
                      )}
                    </Column>
                  ))}
                </Column>
              )}
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={slug(about.technical.title)}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={slug(skill.title)} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.activities?.display && (
            <Column className={styles.sectionGroup} fillWidth gap="l" marginTop="40" marginBottom="40">
              <Heading as="h2" id={slug(about.activities?.title)} variant="display-strong-s" marginBottom="m">
                {about.activities.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.activities.items.map((act, index) => (
                  <Column key={`${act.organization}-${index}`} fillWidth gap="2">
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={slug(act.organization)} variant="heading-strong-l">
                        {act.organization}
                      </Text>
                      {act.timeframe && (
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {act.timeframe}
                        </Text>
                      )}
                    </Row>
                    {act.role && (
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {act.role}
                      </Text>
                    )}
                    {act.description && (
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {act.description}
                      </Text>
                    )}
                  </Column>
                ))}
              </Column>
            </Column>
          )}
        </Column>
      </Row>
    </Column>
  );
}